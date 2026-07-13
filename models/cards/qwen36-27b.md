---
type: Model
title: Qwen3.6 27B
creator: Alibaba
license: Open
intelligence_index: 37.0
price_blended_usd_1m: 0.9
output_speed_tps: 60.0
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 45.5, z: 0.25, r: 53.8, estimated: false }  # 전문 지식
  reasoning: { s: 43.9, z: 0.55, r: 58.3, estimated: false }  # 추론
  coding: { s: 62.1, z: 0.68, r: 60.2, estimated: false }  # 코딩
  agentic: { s: 61.1, z: 0.97, r: 64.5, estimated: false }  # 에이전트
  trust: { s: 60.0, z: 1.5, r: 72.6, estimated: false }  # 신뢰성
  multimodal: { s: 87.0, z: 0.74, r: 61.1, estimated: false }  # 멀티모달
  long_context: { s: 90.8, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.09, r: 66.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-13
timestamp: 2026-07-13T00:00:00Z
---

# Qwen3.6 27B

Alibaba · Open · Unknown · 컨텍스트 262k · 종합지능 **37.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.6 · 출력 $3.6 · 혼합 $0.9/1M · 60.0 t/s · TTFT 3.9s · 262k ctx` · 가성비 41.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.8 | +0.25 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 58.3 | +0.55 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 60.2 | +0.68 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 64.5 | +0.97 | 실측 | [[gdpval]] 32.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 15.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 72.6 | +1.5 | 실측 | [[aa-omniscience]] 52.0%×1.0 |
| 멀티모달 | 61.1 | +0.74 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 66.3 | +1.09 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
