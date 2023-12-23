import OpenAI from "openai";

const GPT_API_KEY = process.env.NEXT_PUBLIC_GPT_API_KEY13;

const openai = new OpenAI({
    apiKey : GPT_API_KEY,
    dangerouslyAllowBrowser: true
});

type Props = {
    inputBar: HTMLInputElement
};

const FetchImage = async ({
    inputBar
}:Props) => {
    let resultantURl = '';

    let submitButton = document.getElementById('submitButton')! as HTMLInputElement;

    if (submitButton == null) {
        return resultantURl;
    }

    // Visual loading effects to wait on results ~
    submitButton.setAttribute(
        'style',
        'background-color: darkgrey; color: grey;',
    );
    submitButton.disabled = true;

    // Takes input for a requested image and generates a URL for it
    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: inputBar.value,
        n: 1,
        size: "1024x1024",
      });
      resultantURl = response.data[0].url!;

    // Visual loading effects to wait on results ~
    submitButton.setAttribute(
        'style',
        'background-color: black; color: white;'
    );
    submitButton!.disabled = false;
    return resultantURl;
};

export default FetchImage;