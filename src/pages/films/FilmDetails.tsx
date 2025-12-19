import React from "react";
import "./FilmDetails.css";
import { Link, useParams } from "react-router";
import { TMDB } from "../../global/TMDB";
import { Spinner } from "../../components/spin/Spinner";
import { Star, Calendar, Clock, ArrowLeft } from "lucide-react";
const IMG = "https://image.tmdb.org/t/p/original";
const POS = "https://image.tmdb.org/t/p/w500";



