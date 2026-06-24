---
type: Model
title: GPT-5.5 (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: 4.35
output_speed_tps: 61.0
context_window: 922000
radar:
  knowledge: { s: 90.7, z: 1.77, r: 76.5, estimated: false }  # 전문 지식
  reasoning: { s: 79.0, z: 1.62, r: 74.3, estimated: false }  # 추론
  coding: { s: 89.6, z: 1.3, r: 69.5, estimated: false }  # 코딩
  agentic: { s: 83.3, z: 1.25, r: 68.7, estimated: false }  # 에이전트
  trust: { s: 12.5, z: -0.75, r: 38.8, estimated: false }  # 신뢰성
  multimodal: { s: 94.8, z: 1.01, r: 65.1, estimated: false }  # 멀티모달
  long_context: { s: 97.3, z: 0.95, r: 64.3, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 0.67, r: 60.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-24
timestamp: 2026-06-24T00:00:00Z
---

# GPT-5.5 (medium)

OpenAI · Proprietary · 컨텍스트 922k · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 61.0 t/s · TTFT 10.01s · 922k ctx` · 가성비 11.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.5 | +1.77 | 실측 | [[aa-omniscience]] 56.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 74.3 | +1.62 | 실측 | [[critpt]] 19.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 69.5 | +1.3 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 68.7 | +1.25 | 실측 | [[gdpval]] 44.0%×1.0, [[tau2-bench]] 92.0%×1.0, [[tau3-banking]] 26.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | 38.8 | -0.75 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | 65.1 | +1.01 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 64.3 | +0.95 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 60.1 | +0.67 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
