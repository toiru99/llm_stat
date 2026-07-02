---
type: Model
title: DeepSeek V4 Pro (max)
creator: DeepSeek
license: Open
intelligence_index: 44.0
price_blended_usd_1m: 0.18
output_speed_tps: 78.0
context_window: 1000000
radar:
  knowledge: { s: 75.2, z: 1.06, r: 65.9, estimated: false }  # 전문 지식
  reasoning: { s: 67.7, z: 1.07, r: 66.1, estimated: false }  # 추론
  coding: { s: 79.9, z: 0.86, r: 62.8, estimated: false }  # 코딩
  agentic: { s: 74.0, z: 0.9, r: 63.5, estimated: false }  # 에이전트
  trust: { s: 2.5, z: -1.12, r: 33.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.2, z: 0.65, r: 59.8, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 0.92, r: 63.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-02
timestamp: 2026-07-02T00:00:00Z
---

# DeepSeek V4 Pro (max)

DeepSeek · Open · 컨텍스트 1M · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $0.43 · 출력 $0.87 · 혼합 $0.18/1M · 78.0 t/s · TTFT 1.77s · 1M ctx` · 가성비 244.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.9 | +1.06 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 66.1 | +1.07 | 실측 | [[critpt]] 13.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 62.8 | +0.86 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 46.0%×0.5 |
| 에이전트 | 63.5 | +0.9 | 실측 | [[apex-agents]] 24.0%×1.0, [[gdpval]] 40.0%×1.0, [[itbench]] 38.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 26.0%×1.0, [[terminal-bench]] 46.0%×1.0 |
| 신뢰성 | 33.2 | -1.12 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.8 | +0.65 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 63.9 | +0.92 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
