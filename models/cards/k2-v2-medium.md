---
type: Model
title: K2-V2 (medium)
creator: Institute of Foundation Models
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 512000
status: past
size_class: Medium
params_b: 70
is_reasoning: true
radar:
  knowledge: { s: 35.0, z: -0.57, r: 41.4, estimated: false }  # 전문 지식
  reasoning: { s: 20.8, z: -0.71, r: 39.3, estimated: false }  # 추론
  coding: { s: 12.6, z: -0.96, r: 35.6, estimated: false }  # 코딩
  agentic: { s: 18.9, z: -1.0, r: 35.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 31.6, z: -0.8, r: 38.0, estimated: false }  # 긴문맥
  instruction: { s: 60.4, z: 0.41, r: 56.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2-V2 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# K2-V2 (medium)

Institute of Foundation Models · Open · Medium(70B) · 컨텍스트 512k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 512k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 41.4 | -0.57 | 실측 | [[gpqa-diamond]] 59.798%×0.4, [[humanitys-last-exam]] 4.35589%×0.3 |
| 추론 | 39.3 | -0.71 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 59.798%×1.0, [[humanitys-last-exam]] 4.35589%×1.0 |
| 코딩 | 35.6 | -0.96 | 실측 | [[terminal-bench]] 8.33333%×0.5 |
| 에이전트 | 35.1 | -1.0 | 실측 | [[tau2-bench]] 24.8538%×1.0, [[terminal-bench]] 8.33333%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.0 | -0.8 | 실측 | [[aa-lcr]] 28%×1.0 |
| 지시 따르기 | 56.2 | +0.41 | 실측 | [[ifbench]] 55.102%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
