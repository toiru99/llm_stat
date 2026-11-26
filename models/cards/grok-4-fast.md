---
type: Model
title: Grok 4 Fast
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.23
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 60.1, z: 0.65, r: 59.7, estimated: false }  # 전문 지식
  reasoning: { s: 39.8, z: 0.23, r: 53.4, estimated: false }  # 추론
  coding: { s: 28.7, z: -0.42, r: 43.8, estimated: false }  # 코딩
  agentic: { s: 47.6, z: 0.02, r: 50.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.1, z: -0.43, r: 43.6, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.78, r: 61.7, estimated: false }  # 긴문맥
  instruction: { s: 54.0, z: 0.15, r: 52.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4 Fast
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Grok 4 Fast

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $0.5 · 혼합 $0.23/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 59.7 | +0.65 | 실측 | [[gpqa-diamond]] 84.7475%×0.4, [[humanitys-last-exam]] 19.0918%×0.3 |
| 추론 | 53.4 | +0.23 | 실측 | [[critpt]] 2.85714%×1.0, [[gpqa-diamond]] 84.7475%×1.0, [[humanitys-last-exam]] 19.0918%×1.0 |
| 코딩 | 43.8 | -0.42 | 실측 | [[terminal-bench]] 18.9394%×0.5 |
| 에이전트 | 50.2 | +0.02 | 실측 | [[tau2-bench]] 65.7895%×1.0, [[terminal-bench]] 18.9394%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 43.6 | -0.43 | 실측 | [[mmmu-pro]] 61.7919%×1.0 |
| 긴문맥 | 61.7 | +0.78 | 실측 | [[aa-lcr]] 73.6667%×1.0 |
| 지시 따르기 | 52.2 | +0.15 | 실측 | [[ifbench]] 50.5442%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
