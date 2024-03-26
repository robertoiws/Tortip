import React from 'react'
import { Fragment } from 'react'
import MetaData from '../layout/MetaData'

const aviso = () => {
  return (
    
    <Fragment>
        <MetaData titulo={"Aviso de Privacidad"} />
        <section id="Aviso" className="container mt-5">
            <h1 className="text-center"> Aviso de Privacidad </h1>
            <p>
            En [nombre de la organización], la información y datos personales de los beneficiarios, colaboradores, donantes, asociados, empleados y proveedores, es tratada de forma estrictamente confidencial y con la secrecía necesaria para lograr los fines de la organización, por lo que hacemos un esfuerzo permanente para salvaguardarla, de conformidad con los artículos 8, 15, 16 y 36 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
            </p>
            <h5>
            Identidad y domicilio de la organización
            </h5>
            <p>
            [Nombre de la organización], es una asociación civil sin fines de lucro, enfocada a [a qué se dedica la organización]. Nuestra misión es [misión].
            En concordancia con el derecho a la protección de datos personales en posesión de particulares consagrado en el artículo 6° de la Constitución Política de los Estados Unidos Mexicanos, así como en cumplimiento a las disposiciones de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, y en base a los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad; [nombre de la organización], con domicilio en [dirección completa], es responsable de recabar y proteger los datos personales, así como del uso que se le dé a los mismos.
            Si el titular de los datos personales no acepta en forma absoluta y completa los términos y condiciones de este aviso, deberá abstenerse de compartir cualquier tipo de información a la [nombre de la organización] por cualquier medio físico, óptico y/o electrónico.
            </p>
            <h5>Datos personales recabados</h5>
            <p>
            Para los fines antes citados [nombre de la organización], requiere obtener los siguientes datos personales:
            </p>
            <h5> A) De las personas físicas</h5>
            <ul>  
                <li>Nombre de la institución.</li>
                <li>Registro Federal de Contribuyentes.</li>
                <li>Nombre de los representantes.</li>
                <li>Dirección.</li>
                <li>Teléfono.</li>
                <li>Correo electrónico.</li>
                <li>Otro tipo de información específica, de acuerdo a las necesidades de las diferentes áreas y conforme a los fines de la organización.</li>
            </ul>

            <h5> B) De las personas morales</h5>
            <ul>  
                <li>Nombre completo.</li>
                <li>Dirección.</li>
                <li>Teléfono local y/o móvil.</li>
                <li>Correo electrónico.</li>
                <li>Fecha de nacimiento.</li>
                <li>Lugar de nacimiento.</li>
                <li>Estado Civil.</li>
                </ul>
            <h5>Manejo de datos personales sensible</h5>
            <p>Algunos de los datos recabados que se mencionan en los incisos antes citados, son considerados como datos personales sensibles, por lo que el uso y tratamiento de los mismos por parte de la organización, se hace con el más estricto control, confidencialidad y secrecía necesarios para la proveeduría, protección y bienestar de nuestra población de interés, dicho manejo de los datos personales y datos personales sensibles es necesario para lograr las finalidades legítimas,  concretas y acordes de [nombre de la organización].</p>
            <h5>Opciones y medios para limitar el uso o divulgación de los datos</h5>
            <p>
            En todo momento el titular podrá limitar el uso o divulgación del tratamiento de sus datos personales, para tal efecto deberá ponerse en contacto a través del correo electrónico [correo electrónico] y será necesario que presente su petición al responsable del manejo de la información de la organización cuyos datos de contacto vienen a continuación.
            Medios para ejercer los derechos de acceso a los datos, rectificación, cancelación u oposición de los mismos, de conformidad con lo dispuesto por la Ley
            El titular tiene derecho de acceder a sus datos personales que [nombre de la organización] posee y a los detalles del tratamiento de los mismos, rectificar en caso de ser inexactos o incompletos, cancelarlos cuando considere que no se requieren para alguna de las finalidades señaladas en el aviso de privacidad, así como a oponerse al tratamiento de los mismos y/o revocar en los casos que proceda, cuando la ley específica lo permita, el consentimiento que para tal fin nos haya otorgado, a través de los procedimientos que se han implementado para tal efecto. Para conocer más detalles sobre el procedimiento respectivo, requisitos y plazos, puede contactar a la [nombre], responsable de manejo de la información, al siguiente correo electrónico [correo del responsable]
            </p>
        </section>

    </Fragment>
  )
}

export default aviso