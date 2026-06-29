---
type: Model
title: NVIDIA Nemotron 3 Nano 4B
creator: NVIDIA
license: Open
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
radar:
  knowledge: { s: 20.5, z: -1.37, r: 29.4, estimated: false }  # 전문 지식
  reasoning: { s: 18.6, z: -1.21, r: 31.8, estimated: false }  # 추론
  coding: { s: 21.5, z: -1.62, r: 25.7, estimated: false }  # 코딩
  agentic: { s: 19.7, z: -1.24, r: 31.4, estimated: false }  # 에이전트
  trust: { s: 8.8, z: -0.87, r: 36.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 23.0, z: -1.69, r: 24.6, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: -0.08, r: 48.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron 3 Nano 4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-29
timestamp: 2026-06-29T00:00:00Z
---

# NVIDIA Nemotron 3 Nano 4B

NVIDIA · Open · 컨텍스트 262k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.4 | -1.37 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 31.8 | -1.21 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 25.7 | -1.62 | 실측 | [[scicode]] 16.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 31.4 | -1.24 | 실측 | [[tau2-bench]] 28.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 36.9 | -0.87 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 24.6 | -1.69 | 실측 | [[aa-lcr]] 17.0%×1.0 |
| 지시 따르기 | 48.8 | -0.08 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
