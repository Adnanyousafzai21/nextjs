import styles from '../styles/About.module.css'
export const getStaticProps = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    // console.log(data)
    return {
        props:{ adnan : data  }
        }
}

const about=({adnan})=>{
console.log(adnan)
    return(
        <div className={styles.direct}>
     {
        adnan.map(val=>{
            return(
                <div  key={val.id}  className="">
                <h1 className={styles.singal}>{val.name}</h1>
                </div>
            )
        })
     }
        </div>
    )
}
export default about