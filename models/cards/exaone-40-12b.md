---
type: Model
title: Exaone 4.0 1.2B
creator: LG AI Research
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 64000
status: current
size_class: Tiny
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 30.4, z: -0.81, r: 37.9, estimated: false }  # 전문 지식
  reasoning: { s: 18.3, z: -0.84, r: 37.3, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.35, r: 29.7, estimated: false }  # 코딩
  agentic: { s: 8.3, z: -1.26, r: 31.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.58, r: 26.3, estimated: false }  # 긴문맥
  instruction: { s: 15.3, z: -1.6, r: 25.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Exaone 4.0 1.2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Exaone 4.0 1.2B

LG AI Research · Open · Tiny · 컨텍스트 64k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 64k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.9 | -0.81 | 실측 | [[gpqa-diamond]] 51.5151515151515%×0.4, [[humanitys-last-exam]] 5.977757182576459%×0.3 |
| 추론 | 37.3 | -0.84 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 51.5151515151515%×1.0, [[humanitys-last-exam]] 5.977757182576459%×1.0 |
| 코딩 | 29.7 | -1.35 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 31.1 | -1.26 | 실측 | [[tau2-bench]] 16.374269005848%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.3 | -1.58 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 25.9 | -1.6 | 실측 | [[ifbench]] 22.9931972789116%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
