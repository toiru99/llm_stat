---
type: Model
title: GPT-5.6 Terra (low)
creator: OpenAI
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: 2.17
output_speed_tps: 135.0
context_window: 1000000
radar:
  knowledge: { s: 70.7, z: 0.64, r: 59.6, estimated: false }  # 전문 지식
  reasoning: { s: 55.4, z: 0.29, r: 54.3, estimated: false }  # 추론
  coding: { s: 76.7, z: 0.55, r: 58.3, estimated: false }  # 코딩
  agentic: { s: 58.9, z: 0.18, r: 52.7, estimated: false }  # 에이전트
  trust: { s: 10.0, z: -0.74, r: 39.0, estimated: false }  # 신뢰성
  multimodal: { s: 86.2, z: 0.4, r: 56.0, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 0.46, r: 57.0, estimated: false }  # 긴문맥
  instruction: { s: 67.6, z: -0.1, r: 48.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# GPT-5.6 Terra (low)

OpenAI · Proprietary · 컨텍스트 1M · 종합지능 **40.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.17/1M · 135.0 t/s · TTFT 1.37s · 1M ctx` · 가성비 18.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.6 | +0.64 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 54.3 | +0.29 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 58.3 | +0.55 | 실측 | [[scicode]] 49.0%×1.0, [[terminal-bench]] 44.0%×0.5 |
| 에이전트 | 52.7 | +0.18 | 실측 | [[gdpval]] 37.0%×1.0, [[tau2-bench]] 61.0%×1.0, [[tau3-banking]] 16.0%×1.0, [[terminal-bench]] 44.0%×1.0 |
| 신뢰성 | 39.0 | -0.74 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | 56.0 | +0.4 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 57.0 | +0.46 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 48.4 | -0.1 | 실측 | [[ifbench]] 60.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
