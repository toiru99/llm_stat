---
type: Model
title: GLM-4.5V
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.377
output_speed_tps: 46.4586529664247
context_window: 64000
status: past
size_class: Medium
params_b: 108
is_reasoning: true
radar:
  knowledge: { s: 41.8, z: -0.24, r: 46.4, estimated: false }  # 전문 지식
  reasoning: { s: 25.0, z: -0.51, r: 42.4, estimated: false }  # 추론
  coding: { s: 8.0, z: -1.11, r: 33.3, estimated: false }  # 코딩
  agentic: { s: 15.4, z: -1.12, r: 33.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 48.0, z: -1.2, r: 32.0, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 31.0, z: -0.81, r: 37.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.5V
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# GLM-4.5V

Z AI · Open · Medium(108B) · 컨텍스트 64k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $0.6 · 출력 $1.8 · 혼합 $0.377/1M · 46.4586529664247 t/s · TTFT 3.15999909525997s · 64k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 46.4 | -0.24 | 실측 | [[gpqa-diamond]] 68.3838%×0.4, [[humanitys-last-exam]] 6.30213%×0.3 |
| 추론 | 42.4 | -0.51 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 68.3838%×1.0, [[humanitys-last-exam]] 6.30213%×1.0 |
| 코딩 | 33.3 | -1.11 | 실측 | [[terminal-bench]] 5.30303%×0.5 |
| 에이전트 | 33.2 | -1.12 | 실측 | [[tau2-bench]] 22.5146%×1.0, [[terminal-bench]] 5.30303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 32.0 | -1.2 | 실측 | [[mmmu-pro]] 50.4624%×1.0 |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 37.9 | -0.81 | 실측 | [[ifbench]] 34.2177%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
