interface CollectionElement {
    data: {
        dataId: string; // `dataId` es un string
    };
}

export const collectionSorter = (collection: CollectionElement[])=>{
    return (
        collection.map((element)=>(
            {
                dataId: element.data.dataId
            }
        )).sort((a, b) => {
            return parseInt(a.dataId) - parseInt(b.dataId);
        })
    )
}