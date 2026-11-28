---
type: Model
title: GLM-4.6V (non-reasoning)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.2742
output_speed_tps: 32.6153383159025
context_window: 128000
status: past
size_class: Medium
params_b: 108
is_reasoning: false
radar:
  knowledge: { s: 32.4, z: -0.7, r: 39.5, estimated: false }  # 전문 지식
  reasoning: { s: 19.2, z: -0.79, r: 38.1, estimated: false }  # 추론
  coding: { s: 4.6, z: -1.23, r: 31.6, estimated: false }  # 코딩
  agentic: { s: 17.8, z: -1.03, r: 34.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 36.9, z: -1.76, r: 23.6, estimated: false }  # 멀티모달
  long_context: { s: 19.2, z: -1.18, r: 32.3, estimated: false }  # 긴문맥
  instruction: { s: 22.2, z: -1.18, r: 32.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.6V (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# GLM-4.6V (non-reasoning)

Z AI · Open · Medium(108B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.2742/1M · 32.6153383159025 t/s · TTFT 8.59670068702083s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 39.5 | -0.7 | 실측 | [[gpqa-diamond]] 56.5657%×0.4, [[humanitys-last-exam]] 3.6608%×0.3 |
| 추론 | 38.1 | -0.79 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 56.5657%×1.0, [[humanitys-last-exam]] 3.6608%×1.0 |
| 코딩 | 31.6 | -1.23 | 실측 | [[terminal-bench]] 3.0303%×0.5 |
| 에이전트 | 34.5 | -1.03 | 실측 | [[tau2-bench]] 30.7018%×1.0, [[terminal-bench]] 3.0303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 23.6 | -1.76 | 실측 | [[mmmu-pro]] 42.1965%×1.0 |
| 긴문맥 | 32.3 | -1.18 | 실측 | [[aa-lcr]] 17%×1.0 |
| 지시 따르기 | 32.4 | -1.18 | 실측 | [[ifbench]] 27.8912%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
