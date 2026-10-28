---
type: Model
title: Qwen3 Coder 30B A3B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.2475
output_speed_tps: 248.0
context_window: 262000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.0, z: -0.85, r: 37.2, estimated: false }  # 전문 지식
  reasoning: { s: 26.9, z: -0.85, r: 37.2, estimated: false }  # 추론
  coding: { s: 22.7, z: -0.48, r: 42.8, estimated: false }  # 코딩
  agentic: { s: 22.7, z: -0.39, r: 44.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 37.1, z: -0.45, r: 43.2, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.97, r: 35.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Coder 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Qwen3 Coder 30B A3B

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.19 · 출력 $0.77 · 혼합 $0.2475/1M · 248.0 t/s · TTFT 0.93s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.2 | -0.85 | 실측 | [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.2 | -0.85 | 실측 | [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 42.8 | -0.48 | 실측 | [[terminal-bench]] 15.0%×0.5 |
| 에이전트 | 44.1 | -0.39 | 실측 | [[terminal-bench]] 15.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.2 | -0.45 | 실측 | [[aa-lcr]] 33.0%×1.0 |
| 지시 따르기 | 35.4 | -0.97 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
