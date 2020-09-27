import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import * as os from "os";

import { Change, EventContext } from 'firebase-functions/lib/cloud-functions';
import { QueryDocumentSnapshot } from 'firebase-functions/lib/providers/firestore';
// import { spawn } from 'child_process';

const serviceAccount = require("../regex-explorer-firebase-adminsdk-mpsf4-d054b60cb0.json");

admin.initializeApp({
 credential: admin.credential.cert(serviceAccount),
 databaseURL: "https://regex-explorer.firebaseio.com"
});

const db = admin.firestore();


// userUpdate({before: {name:'tahooki'}, after: {name: 'tahooki2'}}, {params: {'userId':'oCsKnXkui8fC6Bl3DV5RCGf54U13'}})
export const userUpdate = functions.firestore.document('user/{userId}').onUpdate(async (change: Change<QueryDocumentSnapshot>, context: EventContext) => {
 // 변경된 키값을 찾을 방법이 있을까?

 const afterUser = change.after.data();
 const userId = context.params?.userId;

 //
 const docList = await db.collectionGroup('regexCase').where('userId', '==', userId).get();
 // if userName
 docList.docs.forEach(doc => {
  const data = {
   ...doc.data(),
   userName: afterUser.name
  };

  doc.ref.set(data)
 })
});


// 데이터 등록시 업데이트 해야하는 것들...


// 이미지 등록시 용량, 크기 분할 저장후 사용
// export const generateThumbnail = functions.storage.object().onFinalize(async (object) => {
// // [END generateThumbnailTrigger]
//  // [START eventAttributes]
//  const fileBucket = object.bucket; // The Storage bucket that contains the file.
//  const filePath = object.name; // File path in the bucket.
//  const contentType = object.contentType; // File content type.
//  const metageneration = object.metageneration; // Number of times metadata has been generated. New objects have a value of 1.
//  // [END eventAttributes]
//
//  // [START stopConditions]
//  // Exit if this is triggered on a file that is not an image.
//  if (!contentType.startsWith('image/')) {
//   return console.log('This is not an image.');
//  }
//
//  // Get the file name.
//  const fileName = path.basename(filePath);
//  // Exit if the image is already a thumbnail.
//  if (fileName.startsWith('thumb_')) {
//   return console.log('Already a Thumbnail.');
//  }
//  // [END stopConditions]
//
//  // [START thumbnailGeneration]
//  // Download file from bucket.
//  const bucket = admin.storage().bucket(fileBucket);
//  const tempFilePath = path.join(os.tmpdir(), fileName);
//  const metadata = {
//   contentType: contentType,
//  };
//  await bucket.file(filePath).download({destination: tempFilePath});
//  console.log('Image downloaded locally to', tempFilePath);
//  // Generate a thumbnail using ImageMagick.
//  await spawn('convert', [tempFilePath, '-thumbnail', '200x200>', tempFilePath]);
//  console.log('Thumbnail created at', tempFilePath);
//  // We add a 'thumb_' prefix to thumbnails file name. That's where we'll upload the thumbnail.
//  const thumbFileName = `thumb_${fileName}`;
//  const thumbFilePath = path.join(path.dirname(filePath), thumbFileName);
//  // Uploading the thumbnail.
//  await bucket.upload(tempFilePath, {
//   destination: thumbFilePath,
//   metadata: metadata,
//  });
//  // Once the thumbnail has been uploaded delete the local file to free up disk space.
//  return fs.unlinkSync(tempFilePath);
//  // [END thumbnailGeneration]
// });


// 가입 환영 이메일 발송
// https://github.com/firebase/functions-samples/blob/master/quickstarts/email-users/functions/index.js
