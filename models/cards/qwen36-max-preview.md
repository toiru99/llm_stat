---
type: Model
title: Qwen3.6 Max Preview
creator: Alibaba
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: None
output_speed_tps: 41.0
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.9, z: 1.32, r: 69.8, estimated: false }  # 전문 지식
  reasoning: { s: 53.5, z: 1.03, r: 65.5, estimated: false }  # 추론
  coding: { s: 74.4, z: 1.18, r: 67.8, estimated: false }  # 코딩
  agentic: { s: 81.8, z: 1.77, r: 76.5, estimated: false }  # 에이전트
  trust: { s: 64.7, z: 1.74, r: 76.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.28, r: 69.3, estimated: false }  # 긴문맥
  instruction: { s: 91.5, z: 1.62, r: 74.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 Max Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# Qwen3.6 Max Preview

Alibaba · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **40.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 코딩, 추론

## 실용 지표
`입력 $1.3 · 출력 $7.8 · 혼합 $None/1M · 41.0 t/s · TTFT 3.27s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.8 | +1.32 | 실측 | [[aa-omniscience]] 38.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 29.0%×0.3 |
| 추론 | 65.5 | +1.03 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 29.0%×1.0 |
| 코딩 | 67.8 | +1.18 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 44.0%×0.5 |
| 에이전트 | 76.5 | +1.77 | 실측 | [[tau2-bench]] 96.0%×1.0, [[terminal-bench]] 44.0%×1.0 |
| 신뢰성 | 76.1 | +1.74 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.3 | +1.28 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 74.2 | +1.62 | 실측 | [[ifbench]] 77.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
