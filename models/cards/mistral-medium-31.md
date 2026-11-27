---
type: Model
title: Mistral Medium 3.1
creator: Mistral
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 34.5, z: -0.6, r: 41.0, estimated: false }  # 전문 지식
  reasoning: { s: 20.5, z: -0.73, r: 39.1, estimated: false }  # 추론
  coding: { s: 33.3, z: -0.26, r: 46.1, estimated: false }  # 코딩
  agentic: { s: 27.0, z: -0.71, r: 39.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 52.9, z: -0.95, r: 35.8, estimated: false }  # 멀티모달
  long_context: { s: 48.1, z: -0.29, r: 45.6, estimated: false }  # 긴문맥
  instruction: { s: 38.9, z: -0.48, r: 42.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Medium 3.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Mistral Medium 3.1

Mistral · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 41.0 | -0.6 | 실측 | [[gpqa-diamond]] 58.7879%×0.4, [[humanitys-last-exam]] 4.68026%×0.3 |
| 추론 | 39.1 | -0.73 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 58.7879%×1.0, [[humanitys-last-exam]] 4.68026%×1.0 |
| 코딩 | 46.1 | -0.26 | 실측 | [[scicode]] 32.4074%×1.0, [[terminal-bench]] 10.6061%×0.5 |
| 에이전트 | 39.3 | -0.71 | 실측 | [[gdpval]] 392.35 Elo×1.0, [[tau2-bench]] 40.6433%×1.0, [[tau3-banking]] 8.24742%×1.0, [[terminal-bench]] 10.6061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 35.8 | -0.95 | 실측 | [[mmmu-pro]] 54.1618%×1.0 |
| 긴문맥 | 45.6 | -0.29 | 실측 | [[aa-lcr]] 42.6667%×1.0 |
| 지시 따르기 | 42.8 | -0.48 | 실측 | [[ifbench]] 39.7959%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
