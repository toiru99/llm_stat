---
type: Model
title: Grok 4
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.2
output_speed_tps: 72.5904933836078
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.5, z: 0.96, r: 64.4, estimated: false }  # 전문 지식
  reasoning: { s: 43.6, z: 0.42, r: 56.3, estimated: false }  # 추론
  coding: { s: 57.5, z: 0.55, r: 58.3, estimated: false }  # 코딩
  agentic: { s: 66.5, z: 0.68, r: 60.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 72.5, z: 0.05, r: 50.8, estimated: false }  # 멀티모달
  long_context: { s: 76.7, z: 0.58, r: 58.7, estimated: false }  # 긴문맥
  instruction: { s: 58.4, z: 0.33, r: 54.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Grok 4

SpaceXAI · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $4.2/1M · 72.5904933836078 t/s · TTFT 20.2129707329222s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 64.4 | +0.96 | 실측 | [[gpqa-diamond]] 87.6768%×0.4, [[humanitys-last-exam]] 26.6914%×0.3 |
| 추론 | 56.3 | +0.42 | 실측 | [[critpt]] 2%×1.0, [[gpqa-diamond]] 87.6768%×1.0, [[humanitys-last-exam]] 26.6914%×1.0 |
| 코딩 | 58.3 | +0.55 | 실측 | [[terminal-bench]] 37.8788%×0.5 |
| 에이전트 | 60.2 | +0.68 | 실측 | [[tau2-bench]] 74.8538%×1.0, [[terminal-bench]] 37.8788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 50.8 | +0.05 | 실측 | [[mmmu-pro]] 68.8439%×1.0 |
| 긴문맥 | 58.7 | +0.58 | 실측 | [[aa-lcr]] 68%×1.0 |
| 지시 따르기 | 54.9 | +0.33 | 실측 | [[ifbench]] 53.6735%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
