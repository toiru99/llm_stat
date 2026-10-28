---
type: Model
title: Qwen3.5 35B A3B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.425
output_speed_tps: 166.0
context_window: 262000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 56.4, z: 0.31, r: 54.6, estimated: false }  # 전문 지식
  reasoning: { s: 51.9, z: 0.27, r: 54.1, estimated: false }  # 추론
  coding: { s: 16.7, z: -0.68, r: 39.7, estimated: false }  # 코딩
  agentic: { s: 19.8, z: -0.49, r: 42.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.0, z: 0.09, r: 51.4, estimated: false }  # 멀티모달
  long_context: { s: 70.8, z: 0.56, r: 58.3, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.32, r: 45.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 35B A3B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Qwen3.5 35B A3B (non-reasoning)

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.425/1M · 166.0 t/s · TTFT 2.06s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.6 | +0.31 | 실측 | [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 54.1 | +0.27 | 실측 | [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 39.7 | -0.68 | 실측 | [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 42.6 | -0.49 | 실측 | [[gdpval]] 617.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.4 | +0.09 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 58.3 | +0.56 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 45.2 | -0.32 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
