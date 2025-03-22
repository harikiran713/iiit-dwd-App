const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const shortid = require("shortid");
require('dotenv').config();
const uploadPhoto = async (req, res, next) => {
    try {
        const Location = req.params.type;
        const s3Client = new S3Client({
            region: "ap-south-1",
            credentials: {
                accessKeyId: process.env.accessKeyId,
                secretAccessKey: process.env.secretAccessKey,
            },
        });

        const random = shortid.generate();

        async function putObjectUrl(Location, random) {
            const command = new PutObjectCommand({
                Bucket: "iiit-app",
                Key: `${Location}/${random}`,
                ContentType: "application/octet-stream",
            });
            const presignedUrl = await getSignedUrl(s3Client, command);
            return presignedUrl;
        }

        const photoLink = `https://iiit-app.s3.ap-south-1.amazonaws.com/${Location}/${random}`;
        const presignedUrl = await putObjectUrl(Location, random); 

        res.json({ presignedUrl, photoLink });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: "Error in uploading photo" });
    }
};

module.exports = {
    uploadPhoto,
};
