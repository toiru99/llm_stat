---
type: Model
title: Qwen3.6 35B A3B
creator: Alibaba
license: Open
intelligence_index: 18.0
price_blended_usd_1m: 0.5625
output_speed_tps: 118.0
context_window: 262000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.1, z: 0.07, r: 51.0, estimated: false }  # 전문 지식
  reasoning: { s: 40.3, z: 0.22, r: 53.4, estimated: false }  # 추론
  coding: { s: 51.0, z: 0.56, r: 58.3, estimated: false }  # 코딩
  agentic: { s: 48.7, z: 0.42, r: 56.4, estimated: false }  # 에이전트
  trust: { s: 48.5, z: 1.07, r: 66.0, estimated: false }  # 신뢰성
  multimodal: { s: 82.2, z: 0.59, r: 58.9, estimated: false }  # 멀티모달
  long_context: { s: 80.9, z: 0.93, r: 63.9, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.82, r: 62.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 35B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# Qwen3.6 35B A3B

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.38 · 출력 $2.25 · 혼합 $0.5625/1M · 118.0 t/s · TTFT 2.15s · 262k ctx` · 가성비 32.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.0 | +0.07 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 53.4 | +0.22 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 58.3 | +0.56 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 56.4 | +0.42 | 실측 | [[gdpval]] 19.0%×1.0, [[tau2-bench]] 95.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 66.0 | +1.07 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | 58.9 | +0.59 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 63.9 | +0.93 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 62.3 | +0.82 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
