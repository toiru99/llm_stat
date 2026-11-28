---
type: Model
title: GLM-4.6V
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.2742
output_speed_tps: 34.803534240439
context_window: 128000
status: past
size_class: Medium
params_b: 108
is_reasoning: true
radar:
  knowledge: { s: 46.1, z: -0.03, r: 49.5, estimated: false }  # 전문 지식
  reasoning: { s: 27.9, z: -0.36, r: 44.6, estimated: false }  # 추론
  coding: { s: 21.8, z: -0.65, r: 40.3, estimated: false }  # 코딩
  agentic: { s: 26.8, z: -0.72, r: 39.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 45.4, z: -1.33, r: 30.1, estimated: false }  # 멀티모달
  long_context: { s: 54.9, z: -0.09, r: 48.7, estimated: false }  # 긴문맥
  instruction: { s: 25.2, z: -1.05, r: 34.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.6V
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# GLM-4.6V

Z AI · Open · Medium(108B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.2742/1M · 34.803534240439 t/s · TTFT 6.8190254837721s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 49.5 | -0.03 | 실측 | [[gpqa-diamond]] 71.9192%×0.4, [[humanitys-last-exam]] 9.63855%×0.3 |
| 추론 | 44.6 | -0.36 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 71.9192%×1.0, [[humanitys-last-exam]] 9.63855%×1.0 |
| 코딩 | 40.3 | -0.65 | 실측 | [[terminal-bench]] 14.3939%×0.5 |
| 에이전트 | 39.3 | -0.72 | 실측 | [[tau2-bench]] 31.5789%×1.0, [[terminal-bench]] 14.3939%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 30.1 | -1.33 | 실측 | [[mmmu-pro]] 48.5549%×1.0 |
| 긴문맥 | 48.7 | -0.09 | 실측 | [[aa-lcr]] 48.6667%×1.0 |
| 지시 따르기 | 34.3 | -1.05 | 실측 | [[ifbench]] 30.068%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
