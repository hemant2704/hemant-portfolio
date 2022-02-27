import React from 'react'

const CodingPlatforms = () => {
    const platforms = [
        {
            name: 'Leetcode',
            link: 'https://leetcode.com/waynebruce1704/'
        },
        {
            name: 'codeforces',
            link: 'https://codeforces.com/profile/waynebruce1704'
        },
        {
            name: 'codechef',
            link: 'https://www.codechef.com/users/hemant2704'
        },
        {
            name: 'hackerrank',
            link: 'https://www.hackerrank.com/waynebruce1704/'
        },
        {
            name: 'tryhackme',
            link: 'https://tryhackme.com/p/waynebruce1704'
        }
    ];
    return (
        <div className="mt-5">
            <h3 className='subheading mb-3'>coding platforms</h3>
            {
                platforms.map((site) =>
                    < div className="d-flex flex-column flex-md-row justify-content-between mb-1" key={site.name}>
                        <div className="flex-grow-1">
                            <h5 className="subheading mb-0">{site.name}</h5>
                            <div className="mb-3" style={{textTransform:'lowercase',fontSize:'22px',fontWeight:'lighter'}}><a href={site.link} target="_blank" rel="noopener noreferrer">{site.link}</a></div>
                        </div>
                    </div >
                )

            }
        </div>
    )
}

export default CodingPlatforms
