import React from 'react'
import Image from 'next/image'
import RecipeOutputStyles from './RecipeOutput.module.css'
import styles from './ImageResult.module.css'

var imageWidth = 900;
var imageHeight = 600;

type Props = {
    userName?: string
};

const RecipeOutput = ({
}:Props) => {
    return (
        <div className={styles.center} title='result appears here'>
            <Image
            className={styles.logo}
            id='genImage'
            src="default.svg"
            alt="Images appear here"
            width={imageWidth}
            height={imageHeight}
            priority
            />
        </div>
    );
};

export default RecipeOutput;