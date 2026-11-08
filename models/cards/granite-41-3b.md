---
type: Model
title: Granite 4.1 3B
creator: IBM
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: past
size_class: Tiny
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 15.9, z: -1.48, r: 27.9, estimated: false }  # 전문 지식
  reasoning: { s: 14.4, z: -1.39, r: 29.1, estimated: false }  # 추론
  coding: { s: 3.5, z: -1.13, r: 33.0, estimated: false }  # 코딩
  agentic: { s: 5.4, z: -0.99, r: 35.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 6.8, z: -1.38, r: 29.4, estimated: false }  # 긴문맥
  instruction: { s: 30.3, z: -0.96, r: 35.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.1 3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Granite 4.1 3B

IBM · Open · Tiny · 컨텍스트 131k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 27.9 | -1.48 | 실측 | [[gpqa-diamond]] 31.4%×0.4, [[humanitys-last-exam]] 3.4%×0.3 |
| 추론 | 29.1 | -1.39 | 실측 | [[gpqa-diamond]] 31.4%×1.0, [[humanitys-last-exam]] 3.4%×1.0 |
| 코딩 | 33.0 | -1.13 | 실측 | [[terminal-bench]] 2.3%×0.5 |
| 에이전트 | 35.2 | -0.99 | 실측 | [[gdpval]] 138.0%×1.0, [[terminal-bench]] 2.3%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.4 | -1.38 | 실측 | [[aa-lcr]] 6.0%×1.0 |
| 지시 따르기 | 35.6 | -0.96 | 실측 | [[ifbench]] 33.7%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
