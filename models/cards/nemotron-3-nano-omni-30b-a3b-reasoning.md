---
type: Model
title: Nemotron 3 Nano Omni 30B A3B Reasoning
creator: NVIDIA
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.1
output_speed_tps: 279.0
context_window: 256000
radar:
  knowledge: { s: 25.3, z: -1.17, r: 32.5, estimated: false }  # 전문 지식
  reasoning: { s: 17.0, z: -1.29, r: 30.6, estimated: false }  # 추론
  coding: { s: 35.3, z: -1.04, r: 34.4, estimated: false }  # 코딩
  agentic: { s: 29.1, z: -0.9, r: 36.4, estimated: false }  # 에이전트
  trust: { s: 16.2, z: -0.61, r: 40.8, estimated: false }  # 신뢰성
  multimodal: { s: 46.6, z: -1.42, r: 28.6, estimated: false }  # 멀티모달
  long_context: { s: 48.6, z: -0.79, r: 38.2, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.2, r: 53.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano Omni 30B A3B Reasoning
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-24
timestamp: 2026-06-24T00:00:00Z
---

# Nemotron 3 Nano Omni 30B A3B Reasoning

NVIDIA · Open · 컨텍스트 256k · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.07 · 출력 $0.3 · 혼합 $0.1/1M · 279.0 t/s · TTFT 1.05s · 256k ctx` · 가성비 150.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.5 | -1.17 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 30.6 | -1.29 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 34.4 | -1.04 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 36.4 | -0.9 | 실측 | [[tau2-bench]] 45.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 40.8 | -0.61 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | 28.6 | -1.42 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 38.2 | -0.79 | 실측 | [[aa-lcr]] 36.0%×1.0 |
| 지시 따르기 | 53.0 | +0.2 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
