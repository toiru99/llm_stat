---
type: Model
title: Kimi K2
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.743
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 47.8, z: 0.04, r: 50.6, estimated: false }  # 전문 지식
  reasoning: { s: 42.9, z: -0.01, r: 49.8, estimated: false }  # 추론
  coding: { s: 24.1, z: -0.45, r: 43.2, estimated: false }  # 코딩
  agentic: { s: 24.1, z: -0.36, r: 44.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 59.8, z: 0.2, r: 53.0, estimated: false }  # 긴문맥
  instruction: { s: 41.3, z: -0.49, r: 42.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Kimi K2

Kimi · Open · Large · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.57 · 출력 $2.3 · 혼합 $0.743/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.6 | +0.04 | 실측 | [[gpqa-diamond]] 76.6%×0.4, [[humanitys-last-exam]] 7.4%×0.3 |
| 추론 | 49.8 | -0.01 | 실측 | [[gpqa-diamond]] 76.6%×1.0, [[humanitys-last-exam]] 7.4%×1.0 |
| 코딩 | 43.2 | -0.45 | 실측 | [[terminal-bench]] 15.9%×0.5 |
| 에이전트 | 44.6 | -0.36 | 실측 | [[terminal-bench]] 15.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.0 | +0.2 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 42.6 | -0.49 | 실측 | [[ifbench]] 41.5%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
