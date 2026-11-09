---
type: Model
title: Qwen2.5 72B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.477
output_speed_tps: None
context_window: 131000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.7, z: -0.95, r: 35.7, estimated: false }  # 전문 지식
  reasoning: { s: 24.8, z: -0.93, r: 36.1, estimated: false }  # 추론
  coding: { s: 6.8, z: -1.02, r: 34.7, estimated: false }  # 코딩
  agentic: { s: 6.8, z: -0.94, r: 35.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 29.2, z: -0.71, r: 39.4, estimated: true }  # 긴문맥
  instruction: { s: 34.8, z: -0.77, r: 38.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 72B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Qwen2.5 72B

Alibaba · Open · Medium · 컨텍스트 131k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $0.47 · 출력 $0.49 · 혼합 $0.477/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.7 | -0.95 | 실측 | [[gpqa-diamond]] 49.1%×0.4, [[humanitys-last-exam]] 3.6%×0.3 |
| 추론 | 36.1 | -0.93 | 실측 | [[gpqa-diamond]] 49.1%×1.0, [[humanitys-last-exam]] 3.6%×1.0 |
| 코딩 | 34.7 | -1.02 | 실측 | [[terminal-bench]] 4.5%×0.5 |
| 에이전트 | 35.9 | -0.94 | 실측 | [[terminal-bench]] 4.5%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.4 | -0.71 | 추정 | (추정) |
| 지시 따르기 | 38.5 | -0.77 | 실측 | [[ifbench]] 36.9%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
