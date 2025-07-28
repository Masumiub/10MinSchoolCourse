import React from 'react'
import { IoMdCheckmark } from "react-icons/io";

const fetchCourseData = async () => {
    const res = await fetch(
        'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en',
        {
            headers: {
                'X-TENMS-SOURCE-PLATFORM': 'web',
                accept: 'application/json',
            },
            next: { revalidate: 60 },
        }
    )

    if (!res.ok) throw new Error('Failed to fetch course data')
    return res.json()
}

export const metadata = {
    title: 'IELTS Course - 10 Minute School',
    description: 'Best IELTS course in Bengali and English.',
}

export default async function IELTSCourse() {
    const json = await fetchCourseData()
    const data = json.data;


    return (
        <div>
            <main className="w-full md:w-10/12 mx-auto">

                <div className='flex flex-col md:flex-row gap-10 items-center bg-linear-to-b from-blue-950 to-blue-800 px-9 pt-5 text-white rounded-2xl shadow-2xl'>
                    <div className='w-full md:w-2/3 '>
                        <h1 className="text-5xl font-bold mb-4">{data.title}</h1>

                        <section
                            className="prose mt-4"
                            dangerouslySetInnerHTML={{ __html: data.description }}
                        />
                    </div>

                    <div className='w-full md:w-1/3 bg-base-200 p-5 shadow-2xl rounded-t-2xl'>
                        {data.media?.find(m => m.resource_type === 'video') && (
                            <section className="mt-6">
                                <iframe
                                    className="w-full h-64"
                                    src={`https://www.youtube.com/embed/${data.media.find(m => m.resource_type === 'video').resource_value}`}
                                    title="Course trailer"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </section>
                        )}

                        <button className="btn w-full mt-6 bg-blue-600 text-white rounded-full">
                            {data.cta_text?.name ?? 'Enroll'} – ৳1000
                        </button>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-9 pr-9 pl-9'>
                    <div className='w-full md:w-2/3'>
                        {data.sections?.map(section => {
                            if (section.type === 'instructors') {
                                return (
                                    <section key="instr" className="mt-8 bg-base-200 px-6 py-4 rounded-2xl shadow-2xl">
                                        <h2 className="text-2xl font-semibold">Instructor</h2>
                                        {section.values.map(ins => (
                                            <div key={ins.name} className="mt-4 flex items-center">
                                                <img src={ins.image} alt={ins.name} className="w-20 h-20 rounded-full" />
                                                <div className="ml-4">
                                                    <h3 className="text-lg font-semibold">{ins.name}</h3>
                                                    <div
                                                        className="prose"
                                                        dangerouslySetInnerHTML={{ __html: ins.description }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </section>
                                );
                            }
                            if (section.type === 'features') {
                                return (
                                    <section key="features" className="mt-8 bg-linear-to-r from-blue-950 to-blue-800 px-6 py-10 text-white rounded-2xl">
                                        <h2 className="text-2xl font-semibold">Course Layout</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                                            {section.values.map(v => (
                                                <div key={v.id} className="flex items-start">
                                                    <img src={v.icon} alt="" className="w-8 h-8 mr-2" />
                                                    <div>
                                                        <h3 className="font-semibold">{v.title}</h3>
                                                        <p className='text-sm mt-2'>{v.subtitle}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                );
                            }
                            if (section.type === 'pointers') {
                                return (
                                    <section key="pointers" className="mt-8 bg-base-200 shadow-2xl rounded-2xl px-6 py-10">
                                        <h2 className="text-2xl font-semibold">What You Will Learn</h2>
                                        <ul className="mt-2">
                                            {section.values.slice(0, 5).map(v => (
                                                <div className='flex gap-2 items-center mt-2' key={v.id}>
                                                    <IoMdCheckmark />
                                                    <li>{v.text}</li>
                                                </div>

                                            ))}
                                        </ul>
                                    </section>
                                );
                            }
                            if (section.type === 'feature_explanations') {
                                return (
                                    <section key="exclusive" className="mt-8">
                                        <h2 className="text-2xl font-semibold">Course Exclusive Feature</h2>
                                        <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {section.values.map(v => (
                                                <li key={v.id} className="bg-linear-to-b from-blue-950 to-blue-800 shadow-2xl p-6 rounded-2xl  text-white">
                                                    <img src={v.file_url} alt="banner" className='rounded-2xl' />
                                                    <h3 className="font-semibold text-lg mt-4">{v.title}</h3>
                                                    <ul className="list-disc list-inside text-xs mt-2">
                                                        {v.checklist.map((c, i) => <li key={i} className='mt-2'>{c}</li>)}
                                                    </ul>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                );
                            }
                            if (section.type === 'about') {
                                const items = section.values;

                                return (
                                    <section key="about" className="mt-8">
                                        <h2 className="text-2xl font-semibold mb-4">Course Details</h2>

                                        {items.map((item, index) => (
                                            <div
                                                key={item.id}
                                                className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2"
                                            >
                                                <input
                                                    type="radio"
                                                    name="about-accordion"
                                                    defaultChecked={index === 0}
                                                />
                                                <div
                                                    className="collapse-title font-semibold"
                                                    dangerouslySetInnerHTML={{ __html: item.title }}
                                                />
                                                <div
                                                    className="collapse-content text-sm prose"
                                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                                />
                                            </div>
                                        ))}
                                    </section>
                                );
                            }
                            return null;
                        })}
                    </div>

                    <div className='w-full md:w-1/3'>
                        <section className=" bg-base-200 p-5 shadow-2xl rounded-b-2xl">
                            <h2 className="text-2xl font-semibold text-center">What's included?</h2>
                            <ul className=" mt-3">
                                {data.checklist?.map(item => (
                                    <div className='flex gap-2 items-center mb-2' key={item.id}>
                                        <IoMdCheckmark />
                                        <li >{item.text}</li>
                                    </div>
                                ))}
                            </ul>
                        </section>
                    </div>

                </div>



            </main>
        </div>
    )
}
