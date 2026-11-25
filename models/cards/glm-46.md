---
type: Model
title: GLM-4.6
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.407
output_speed_tps: 48.92066893410805
context_window: 200000
status: past
size_class: Large
params_b: 357
is_reasoning: true
radar:
  knowledge: { s: 52.9, z: 0.3, r: 54.5, estimated: false }  # 전문 지식
  reasoning: { s: 33.4, z: -0.08, r: 48.7, estimated: false }  # 추론
  coding: { s: 37.9, z: -0.11, r: 48.4, estimated: false }  # 코딩
  agentic: { s: 46.6, z: -0.02, r: 49.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 60.9, z: 0.1, r: 51.5, estimated: false }  # 긴문맥
  instruction: { s: 43.9, z: -0.27, r: 45.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.6
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GLM-4.6

Z AI · Open · Large(357B) · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $0.55 · 출력 $2.2 · 혼합 $0.407/1M · 48.92066893410805 t/s · TTFT 3.770275313099495s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 54.5 | +0.3 | 실측 | [[gpqa-diamond]] 77.9798%×0.4, [[humanitys-last-exam]] 14.4578%×0.3 |
| 추론 | 48.7 | -0.08 | 실측 | [[critpt]] 1.14286%×1.0, [[gpqa-diamond]] 77.9798%×1.0, [[humanitys-last-exam]] 14.4578%×1.0 |
| 코딩 | 48.4 | -0.11 | 실측 | [[terminal-bench]] 25%×0.5 |
| 에이전트 | 49.7 | -0.02 | 실측 | [[gdpval]] 763.99 Elo×1.0, [[tau2-bench]] 70.4678%×1.0, [[tau3-banking]] 13.4021%×1.0, [[terminal-bench]] 25%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 51.5 | +0.1 | 실측 | [[aa-lcr]] 54%×1.0 |
| 지시 따르기 | 45.9 | -0.27 | 실측 | [[ifbench]] 43.4014%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
