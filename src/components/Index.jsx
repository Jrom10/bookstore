import React from "react";
import { useAppContext } from "../store/Store";
import Layout from "./Layout";
import Book from "./Book";

function Index() {
    
    const store = useAppContext()

    return (
        <Layout>
            <div>
                {store.items.map((item) => (<Book key={item.id} item={item} />))}
            </div>
        </Layout>
    )
}

export default Index
