---
type: Model
title: Qwen3 Coder 30B A3B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.2475
output_speed_tps: None
context_window: 262000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 29.2, z: -0.86, r: 37.1, estimated: false }  # 전문 지식
  reasoning: { s: 26.0, z: -0.84, r: 37.4, estimated: false }  # 추론
  coding: { s: 23.1, z: -0.49, r: 42.6, estimated: false }  # 코딩
  agentic: { s: 23.1, z: -0.4, r: 44.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 36.9, z: -0.48, r: 42.7, estimated: false }  # 긴문맥
  instruction: { s: 28.9, z: -1.03, r: 34.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Coder 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Qwen3 Coder 30B A3B

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.19 · 출력 $0.77 · 혼합 $0.2475/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.1 | -0.86 | 실측 | [[gpqa-diamond]] 51.6%×0.4, [[humanitys-last-exam]] 3.8%×0.3 |
| 추론 | 37.4 | -0.84 | 실측 | [[gpqa-diamond]] 51.6%×1.0, [[humanitys-last-exam]] 3.8%×1.0 |
| 코딩 | 42.6 | -0.49 | 실측 | [[terminal-bench]] 15.2%×0.5 |
| 에이전트 | 44.0 | -0.4 | 실측 | [[terminal-bench]] 15.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.7 | -0.48 | 실측 | [[aa-lcr]] 32.7%×1.0 |
| 지시 따르기 | 34.6 | -1.03 | 실측 | [[ifbench]] 32.7%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
