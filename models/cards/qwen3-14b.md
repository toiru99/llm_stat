---
type: Model
title: Qwen3 14B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.132
output_speed_tps: 74.0
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 36.1, z: -0.59, r: 41.2, estimated: false }  # 전문 지식
  reasoning: { s: 32.4, z: -0.6, r: 40.9, estimated: false }  # 추론
  coding: { s: 28.7, z: -0.28, r: 45.8, estimated: false }  # 코딩
  agentic: { s: 6.2, z: -0.96, r: 35.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.57, r: 26.5, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.5, r: 42.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 14B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Qwen3 14B

Alibaba · Open · Unknown · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.12 · 출력 $0.24 · 혼합 $0.132/1M · 74.0 t/s · TTFT 0.9s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.2 | -0.59 | 실측 | [[gpqa-diamond]] 60.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 40.9 | -0.6 | 실측 | [[gpqa-diamond]] 60.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 45.8 | -0.28 | 실측 | [[scicode]] 31.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 35.6 | -0.96 | 실측 | [[gdpval]] 17.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.5 | -1.57 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 42.5 | -0.5 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
