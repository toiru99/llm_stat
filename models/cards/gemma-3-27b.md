---
type: Model
title: Gemma 3 27B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0
output_speed_tps: 25.1483512553091
context_window: 128000
status: past
size_class: Small
params_b: 27.4
is_reasoning: false
radar:
  knowledge: { s: 23.8, z: -1.12, r: 33.2, estimated: false }  # 전문 지식
  reasoning: { s: 14.3, z: -1.04, r: 34.4, estimated: false }  # 추론
  coding: { s: 19.8, z: -0.72, r: 39.3, estimated: false }  # 코딩
  agentic: { s: 4.4, z: -1.51, r: 27.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 44.7, z: -1.36, r: 29.6, estimated: false }  # 멀티모달
  long_context: { s: 8.3, z: -1.52, r: 27.3, estimated: false }  # 긴문맥
  instruction: { s: 27.7, z: -0.95, r: 35.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Gemma 3 27B

Google · Open · Small(27.4B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 25.1483512553091 t/s · TTFT 3.18550421603336s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 33.2 | -1.12 | 실측 | [[gpqa-diamond]] 42.8283%×0.4, [[humanitys-last-exam]] 4.4%×0.3 |
| 추론 | 34.4 | -1.04 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 42.8283%×1.0, [[humanitys-last-exam]] 4.4%×1.0 |
| 코딩 | 39.3 | -0.72 | 실측 | [[scicode]] 23.2639%×1.0, [[terminal-bench]] 3.78788%×0.5 |
| 에이전트 | 27.4 | -1.51 | 실측 | [[gdpval]] -401.22 Elo×1.0, [[tau2-bench]] 10.5263%×1.0, [[tau3-banking]] 0.824742%×1.0, [[terminal-bench]] 3.78788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 29.6 | -1.36 | 실측 | [[mmmu-pro]] 48.0347%×1.0 |
| 긴문맥 | 27.3 | -1.52 | 실측 | [[aa-lcr]] 7.33333%×1.0 |
| 지시 따르기 | 35.8 | -0.95 | 실측 | [[ifbench]] 31.8367%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
