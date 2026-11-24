---
type: Model
title: GLM-4.5-Air
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.251
output_speed_tps: 60.6309552837569
context_window: 128000
status: past
size_class: Medium
params_b: 106
is_reasoning: true
radar:
  knowledge: { s: 45.5, z: -0.06, r: 49.1, estimated: false }  # 전문 지식
  reasoning: { s: 27.2, z: -0.39, r: 44.1, estimated: false }  # 추론
  coding: { s: 31.0, z: -0.34, r: 44.9, estimated: false }  # 코딩
  agentic: { s: 39.0, z: -0.29, r: 45.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 52.6, z: -0.16, r: 47.6, estimated: false }  # 긴문맥
  instruction: { s: 35.7, z: -0.61, r: 40.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.5-Air
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GLM-4.5-Air

Z AI · Open · Medium(106B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.17 · 출력 $0.98 · 혼합 $0.251/1M · 60.6309552837569 t/s · TTFT 1.38324387581004s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 49.1 | -0.06 | 실측 | [[gpqa-diamond]] 73.3333%×0.4, [[humanitys-last-exam]] 7.04356%×0.3 |
| 추론 | 44.1 | -0.39 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 73.3333%×1.0, [[humanitys-last-exam]] 7.04356%×1.0 |
| 코딩 | 44.9 | -0.34 | 실측 | [[terminal-bench]] 20.4545%×0.5 |
| 에이전트 | 45.7 | -0.29 | 실측 | [[tau2-bench]] 46.4912%×1.0, [[terminal-bench]] 20.4545%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.6 | -0.16 | 실측 | [[aa-lcr]] 46.6667%×1.0 |
| 지시 따르기 | 40.8 | -0.61 | 실측 | [[ifbench]] 37.551%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
