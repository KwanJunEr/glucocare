import { Translate } from "@google-cloud/translate/build/src/v2";
import "dotenv";
// import jsonData from "../../../resources.json";

// Imports the Google Cloud client library
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS!);
const projectId = CREDENTIALS.project_id;

// Instantiates a client
const translate = new Translate({
	credentials: CREDENTIALS,
	projectId: projectId,
});

async function translator(text: string, language: string) {
	const [translation] = await translate.translate(text, language);
	return translation;
}

//Translate the text into the desired language (GOOGLE API)
export async function POST(request: Request) {
	const formData = await request.formData();
	const text = formData.get("text") as string;
	const language = formData.get("language") as string;

	const translatedText = await translator(text, language);

	return Response.json(translatedText);
}

//Hard coded translation (NON GOOGLE API)
/* export async function GET(request: Request) {
	const data = jsonData;

	return Response.json(data);
}
 */