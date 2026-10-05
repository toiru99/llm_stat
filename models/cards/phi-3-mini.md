---
type: Model
title: Phi-3 Mini
creator: Microsoft
license: Open
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 4100
status: past
size_class: Tiny
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 17.5, z: -1.16, r: 32.6, estimated: false }  # 전문 지식
  reasoning: { s: 16.1, z: -0.93, r: 36.1, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.25, r: 31.3, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.48, r: 27.8, estimated: false }  # 에이전트
  trust: { s: 13.1, z: -0.62, r: 40.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.56, r: 26.6, estimated: true }  # 긴문맥
  instruction: { s: 16.9, z: -1.55, r: 26.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Phi-3 Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# Phi-3 Mini

Microsoft · Open · Tiny · 컨텍스트 4k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 4k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.6 | -1.16 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.1 | -0.93 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 31.3 | -1.25 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 27.8 | -1.48 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 40.7 | -0.62 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.6 | -1.56 | 추정 | (추정) |
| 지시 따르기 | 26.7 | -1.55 | 실측 | [[ifbench]] 24.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
