---
type: Model
title: GPT-5.5 (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 55.0
price_blended_usd_1m: 4.35
output_speed_tps: 79.0
context_window: 922000
radar:
  knowledge: { s: 93.0, z: 1.88, r: 78.2, estimated: false }  # 전문 지식
  reasoning: { s: 89.9, z: 2.13, r: 81.9, estimated: false }  # 추론
  coding: { s: 94.5, z: 1.52, r: 72.8, estimated: false }  # 코딩
  agentic: { s: 91.3, z: 1.55, r: 73.3, estimated: false }  # 에이전트
  trust: { s: 12.5, z: -0.74, r: 38.9, estimated: false }  # 신뢰성
  multimodal: { s: 93.1, z: 0.91, r: 63.6, estimated: false }  # 멀티모달
  long_context: { s: 100.0, z: 1.05, r: 65.7, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 0.97, r: 64.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-29
timestamp: 2026-06-29T00:00:00Z
---

# GPT-5.5 (xhigh)

OpenAI · Proprietary · 컨텍스트 922k · 종합지능 **55.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 79.0 t/s · TTFT 76.69s · 922k ctx` · 가성비 12.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.2 | +1.88 | 실측 | [[aa-omniscience]] 57.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 81.9 | +2.13 | 실측 | [[critpt]] 27.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 72.8 | +1.52 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 61.0%×0.5 |
| 에이전트 | 73.3 | +1.55 | 실측 | [[apex-agents]] 38.0%×1.0, [[gdpval]] 49.0%×1.0, [[itbench]] 46.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 31.0%×1.0, [[terminal-bench]] 61.0%×1.0 |
| 신뢰성 | 38.9 | -0.74 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | 63.6 | +0.91 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 65.7 | +1.05 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 64.6 | +0.97 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
