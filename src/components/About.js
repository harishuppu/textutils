import React from 'react';

export default function About(props) {
    return (
        <>
            <div className="containar" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="abtcon1">
                    <h1>About us</h1>
                </div>
                <div className="accordinbox  " >
                    <div className="accordion accordion-flush  " id="accordionFlushExample" >
                        <div className="accordion-item  " >
                            <h2 className="accordion-header  " id="flush-headingOne">
                                <button className="accordion-button collapsed" style={{ color: props.mode === 'dark' ? 'white' : '#1f1f1f', backgroundColor: props.mode === 'dark' ? '#1f1f1f' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    About TextUtils
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" style={{ color: props.mode === 'dark' ? 'white' : '#1f1f1f', backgroundColor: props.mode === 'dark' ? '#1f1f1f' : 'white' }} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">TextUtils is an text analyzer optimized in a way that one can be able to perform operations on the text. <br />It is a tool that allows you to analyse a text by counting the number of sentences, words and characters present. It also provides statistical information on the average time required for a person to read the text. Our online text analyser / word counter is easy to use and free of charge.</div>
                            </div>
                        </div>
                        <div className="accordion-item  ">
                            <h2 className="accordion-header  " id="flush-headingTwo">
                                <button className="accordion-button collapsed" style={{ color: props.mode === 'dark' ? 'white' : '#1f1f1f', backgroundColor: props.mode === 'dark' ? '#1f1f1f' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Contact Us
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" style={{ color: props.mode === 'dark' ? 'white' : '#1f1f1f', backgroundColor: props.mode === 'dark' ? '#1f1f1f' : 'white' }} aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">For any information and queries regarding the text utils analyzer please contact the
                                    <br /> <a href="https://github.com/harishuppu?tab=repositories" target="_blank"> Developer</a>.</div>
                            </div>
                        </div>
                        <div className="accordion-item  ">
                            <h2 className="accordion-header  " id="flush-headingThree">
                                <button className="accordion-button collapsed " style={{ color: props.mode === 'dark' ? 'white' : '#1f1f1f', backgroundColor: props.mode === 'dark' ? '#1f1f1f' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Terms and polices
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" style={{ color: props.mode === 'dark' ? 'white' : '#1f1f1f', backgroundColor: props.mode === 'dark' ? '#1f1f1f' : 'white' }} aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">This service located at “Textutils.com” is a web site (Site) owned and operated by Textutils Ltd. This Site is intended to provide information that might be of interest to users. The contents of this Site, including but not limited to the text and images herein and their arrangements, unless otherwise noted, are the copyrighted material of Textutils. Copyright © 2007-2022 Textutils. All rights reserved. All Trademarks referred to are the property of their respective owners..</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <br /><br />
            <div className="d-flex align-items-center justify-content-center" style={{ color: props.mode === 'dark' ? 'white' : '#1f1f1f', backgroundColor: props.mode === 'dark' ? '#1f1f1f' : '#cccccc' }} >
               <strong> Made By <a href="https://github.com/harishuppu?tab=repositories" target="_blank" >Harish</a></strong>
            </div>

            <div className="invisible">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, autem. Perferendis atque voluptate, consectetur nam perspiciatis dolorum, unde dolorem nesciunt quo voluptates minima ipsam! Veritatis, commodi! Expedita nostrum molestias vitae!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, obcaecati nihil vero harum quidem voluptates nemo eveniet delectus Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cupiditate aspernatur quia, nam iure corrupti alias architecto quidem recusandae! Voluptatibus culpa rem distinctio ipsum iste? Officia rerum itaque corrupti tempore!console.l lore; impedit incidunt eius, aperiam voluptatem a molestiae, maiores ad illum architecto ducimus.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis commodi hic corporis ducimus natus quam a praesentium eius, ea iusto Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime deserunt praesentium laboriosam porro consequatur, obcaecati sapiente provident autem fuga labore corrupti inventore vero aliquam incidunt illo? Rem, sit optio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste dolor perspiciatis quas officia asperiores libero nam fugiat nulla, fuga iure eius, odio voluptas itaque suscipit aut. Accusantium nemo consequuntur ab. numquam, alias animi, laborum inventore autem. Corrupti deserunt aperiam delectus!
               <br /><br /><br /><br /><br /><br />
            </div>
           
        </>
    )
}
