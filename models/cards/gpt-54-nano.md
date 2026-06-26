---
type: Model
title: GPT-5.4 nano
creator: OpenAI
license: Proprietary
intelligence_index: 30.0
price_blended_usd_1m: 0.18
output_speed_tps: 153.0
context_window: 400000
radar:
  knowledge: { s: 42.8, z: -0.38, r: 44.2, estimated: false }  # 전문 지식
  reasoning: { s: 40.5, z: -0.19, r: 47.1, estimated: false }  # 추론
  coding: { s: 59.7, z: 0.01, r: 50.2, estimated: false }  # 코딩
  agentic: { s: 53.0, z: 0.05, r: 50.8, estimated: false }  # 에이전트
  trust: { s: 57.5, z: 0.84, r: 62.5, estimated: false }  # 신뢰성
  multimodal: { s: 58.6, z: -0.83, r: 37.5, estimated: false }  # 멀티모달
  long_context: { s: 77.0, z: 0.23, r: 53.4, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.26, r: 53.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 nano
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-26
timestamp: 2026-06-26T00:00:00Z
---

# GPT-5.4 nano

OpenAI · Proprietary · 컨텍스트 400k · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.25 · 혼합 $0.18/1M · 153.0 t/s · TTFT 2.96s · 400k ctx` · 가성비 166.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.2 | -0.38 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 47.1 | -0.19 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 50.2 | +0.01 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 50.8 | +0.05 | 실측 | [[tau2-bench]] 53.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 62.5 | +0.84 | 실측 | [[aa-omniscience]] 50.0%×1.0 |
| 멀티모달 | 37.5 | -0.83 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 53.4 | +0.23 | 실측 | [[aa-lcr]] 57.0%×1.0 |
| 지시 따르기 | 53.9 | +0.26 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
