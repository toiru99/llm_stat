---
type: Model
title: GPT-5.4 nano (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: 0.18
output_speed_tps: 166.0
context_window: 400000
radar:
  knowledge: { s: 52.1, z: 0.04, r: 50.5, estimated: false }  # 전문 지식
  reasoning: { s: 54.2, z: 0.46, r: 56.8, estimated: false }  # 추론
  coding: { s: 74.4, z: 0.65, r: 59.7, estimated: false }  # 코딩
  agentic: { s: 58.9, z: 0.29, r: 54.3, estimated: false }  # 에이전트
  trust: { s: 27.5, z: -0.22, r: 46.7, estimated: false }  # 신뢰성
  multimodal: { s: 67.2, z: -0.4, r: 44.0, estimated: false }  # 멀티모달
  long_context: { s: 89.2, z: 0.66, r: 60.0, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 0.97, r: 64.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 nano (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-28
timestamp: 2026-06-28T00:00:00Z
---

# GPT-5.4 nano (xhigh)

OpenAI · Proprietary · 컨텍스트 400k · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.25 · 혼합 $0.18/1M · 166.0 t/s · TTFT 3.64s · 400k ctx` · 가성비 211.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.5 | +0.04 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 26.0%×0.3 |
| 추론 | 56.8 | +0.46 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 26.0%×1.0 |
| 코딩 | 59.7 | +0.65 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 54.3 | +0.29 | 실측 | [[apex-agents]] 25.0%×1.0, [[gdpval]] 30.0%×1.0, [[itbench]] 24.0%×1.0, [[tau2-bench]] 76.0%×1.0, [[tau3-banking]] 21.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 46.7 | -0.22 | 실측 | [[aa-omniscience]] 26.0%×1.0 |
| 멀티모달 | 44.0 | -0.4 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 60.0 | +0.66 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 64.5 | +0.97 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
