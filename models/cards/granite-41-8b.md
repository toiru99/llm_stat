---
type: Model
title: Granite 4.1 8B
creator: IBM
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 23.7, z: -1.12, r: 33.2, estimated: false }  # 전문 지식
  reasoning: { s: 21.2, z: -1.08, r: 33.9, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.26, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.18, r: 32.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 15.0, z: -1.14, r: 32.9, estimated: false }  # 긴문맥
  instruction: { s: 37.2, z: -0.67, r: 39.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.1 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Granite 4.1 8B

IBM · Open · Small · 컨텍스트 131k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.2 | -1.12 | 실측 | [[gpqa-diamond]] 43.3%×0.4, [[humanitys-last-exam]] 3.8%×0.3 |
| 추론 | 33.9 | -1.08 | 실측 | [[gpqa-diamond]] 43.3%×1.0, [[humanitys-last-exam]] 3.8%×1.0 |
| 코딩 | 31.0 | -1.26 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 32.3 | -1.18 | 실측 | [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.9 | -1.14 | 실측 | [[aa-lcr]] 13.3%×1.0 |
| 지시 따르기 | 39.9 | -0.67 | 실측 | [[ifbench]] 38.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
