---
type: Model
title: Granite 3.3 8B (non-reasoning)
creator: IBM
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 18.1, z: -1.38, r: 29.3, estimated: false }  # 전문 지식
  reasoning: { s: 16.5, z: -1.32, r: 30.2, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.24, r: 31.4, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.17, r: 32.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.5, z: -1.55, r: 26.7, estimated: true }  # 긴문맥
  instruction: { s: 14.1, z: -1.62, r: 25.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 3.3 8B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# Granite 3.3 8B (non-reasoning)

IBM · Open · Small · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.3 | -1.38 | 실측 | [[gpqa-diamond]] 34.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 30.2 | -1.32 | 실측 | [[gpqa-diamond]] 34.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 31.4 | -1.24 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 32.4 | -1.17 | 실측 | [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.7 | -1.55 | 추정 | (추정) |
| 지시 따르기 | 25.7 | -1.62 | 실측 | [[ifbench]] 22.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
