import React from 'react'

const ResourceDataMap = ({
    resourceData = [],
    resourceItem: ResourceItem,
    resourceName
}) => {
    return (
        <>
            {
                resourceData.map((resource: {}, index: number) => (
                    <ResourceItem key={index} {...{ [resourceName]: resource }} />
                ))
            }
        </>
    )
}

export default ResourceDataMap