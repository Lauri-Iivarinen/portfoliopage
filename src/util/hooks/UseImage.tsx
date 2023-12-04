import {useState, useEffect} from 'react'

export const useImage = (imgName: string) => {
    const [img, setImg] = useState<any>(null)
    const [loading, setLoading] = useState(true)
   

    //credit:
    //https://stackoverflow.com/questions/53775936/import-image-dynamically-in-react-component
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../img/${imgName}`)
                setImg(response.default)
            } catch (error) {
                return {loading, img: null, error}
            } finally {
                setLoading(false)
            }
        }

        fetchImage()
    }, [imgName])

    return {loading, img, error: null}
}