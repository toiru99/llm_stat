---
type: Model
title: Qwen3.7 Max
creator: Alibaba
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.6
output_speed_tps: 198.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.1, z: 1.48, r: 72.3, estimated: false }  # 전문 지식
  reasoning: { s: 81.0, z: 1.6, r: 73.9, estimated: false }  # 추론
  coding: { s: 73.5, z: 1.22, r: 68.3, estimated: false }  # 코딩
  agentic: { s: 59.0, z: 0.85, r: 62.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.1, r: 66.4, estimated: false }  # 긴문맥
  instruction: { s: 97.2, z: 1.86, r: 77.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.7 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Qwen3.7 Max

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $2.5 · 출력 $7.5 · 혼합 $1.6/1M · 198.0 t/s · TTFT 2.17s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.3 | +1.48 | 실측 | [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 73.9 | +1.6 | 실측 | [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 68.3 | +1.22 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 51.0%×0.5 |
| 에이전트 | 62.8 | +0.85 | 실측 | [[gdpval]] 1135.0%×1.0, [[itbench]] 42.0%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 51.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.4 | +1.1 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 77.9 | +1.86 | 실측 | [[ifbench]] 81.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
