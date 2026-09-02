---
type: Model
title: Qwen3.7 Max
creator: Alibaba
license: Proprietary
intelligence_index: 47.0
price_blended_usd_1m: 1.6
output_speed_tps: 202.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.1, z: 1.08, r: 66.3, estimated: false }  # 전문 지식
  reasoning: { s: 68.7, z: 1.72, r: 75.7, estimated: false }  # 추론
  coding: { s: 78.4, z: 1.35, r: 70.2, estimated: false }  # 코딩
  agentic: { s: 65.4, z: 1.1, r: 66.5, estimated: false }  # 에이전트
  trust: { s: 74.2, z: 2.38, r: 85.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.24, r: 68.6, estimated: false }  # 긴문맥
  instruction: { s: 97.2, z: 1.86, r: 78.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.7 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Qwen3.7 Max

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **47.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $2.5 · 출력 $7.5 · 혼합 $1.6/1M · 202.0 t/s · TTFT 2.3s · 1M ctx` · 가성비 29.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.3 | +1.08 | 실측 | [[aa-omniscience]] 31.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 75.7 | +1.72 | 실측 | [[critpt]] 13.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 70.2 | +1.35 | 실측 | [[scicode]] 49.0%×1.0, [[terminal-bench]] 51.0%×0.5 |
| 에이전트 | 66.5 | +1.1 | 실측 | [[gdpval]] 38.0%×1.0, [[itbench]] 42.0%×1.0, [[tau2-bench]] 95.0%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 51.0%×1.0 |
| 신뢰성 | 85.7 | +2.38 | 실측 | [[aa-omniscience]] 74.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.6 | +1.24 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 78.0 | +1.86 | 실측 | [[ifbench]] 81.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
