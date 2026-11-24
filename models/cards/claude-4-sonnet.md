---
type: Model
title: Claude 4 Sonnet
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.5, z: 0.18, r: 52.7, estimated: false }  # 전문 지식
  reasoning: { s: 30.8, z: -0.22, r: 46.8, estimated: false }  # 추론
  coding: { s: 47.1, z: 0.2, r: 53.1, estimated: false }  # 코딩
  agentic: { s: 48.3, z: 0.04, r: 50.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.1, z: -0.43, r: 43.6, estimated: false }  # 멀티모달
  long_context: { s: 79.3, z: 0.66, r: 59.9, estimated: false }  # 긴문맥
  instruction: { s: 59.8, z: 0.39, r: 55.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4 Sonnet
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Claude 4 Sonnet

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 52.7 | +0.18 | 실측 | [[gpqa-diamond]] 77.6768%×0.4, [[humanitys-last-exam]] 10.7044%×0.3 |
| 추론 | 46.8 | -0.22 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 77.6768%×1.0, [[humanitys-last-exam]] 10.7044%×1.0 |
| 코딩 | 53.1 | +0.2 | 실측 | [[terminal-bench]] 31.0606%×0.5 |
| 에이전트 | 50.6 | +0.04 | 실측 | [[gdpval]] 697.76 Elo×1.0, [[tau2-bench]] 64.6199%×1.0, [[tau3-banking]] 16.701%×1.0, [[terminal-bench]] 31.0606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 43.6 | -0.43 | 실측 | [[mmmu-pro]] 61.7919%×1.0 |
| 긴문맥 | 59.9 | +0.66 | 실측 | [[aa-lcr]] 70.3333%×1.0 |
| 지시 따르기 | 55.8 | +0.39 | 실측 | [[ifbench]] 54.6939%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
