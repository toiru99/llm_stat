---
type: Model
title: DeepSeek R1 0528
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 1.8175
output_speed_tps: 22.883752199874102
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: true
radar:
  knowledge: { s: 55.9, z: 0.44, r: 56.7, estimated: false }  # 전문 지식
  reasoning: { s: 35.6, z: 0.02, r: 50.4, estimated: false }  # 추론
  coding: { s: 24.1, z: -0.57, r: 41.4, estimated: false }  # 코딩
  agentic: { s: 30.5, z: -0.59, r: 41.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 62.8, z: 0.16, r: 52.3, estimated: false }  # 긴문맥
  instruction: { s: 38.6, z: -0.49, r: 42.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 0528
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# DeepSeek R1 0528

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $1.85 · 출력 $2.75 · 혼합 $1.8175/1M · 22.883752199874102 t/s · TTFT 2.29965735973467s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 56.7 | +0.44 | 실측 | [[gpqa-diamond]] 81.3131%×0.4, [[humanitys-last-exam]] 15.848%×0.3 |
| 추론 | 50.4 | +0.02 | 실측 | [[critpt]] 1.42857%×1.0, [[gpqa-diamond]] 81.3131%×1.0, [[humanitys-last-exam]] 15.848%×1.0 |
| 코딩 | 41.4 | -0.57 | 실측 | [[terminal-bench]] 15.9091%×0.5 |
| 에이전트 | 41.2 | -0.59 | 실측 | [[tau2-bench]] 36.5497%×1.0, [[terminal-bench]] 15.9091%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.3 | +0.16 | 실측 | [[aa-lcr]] 55.6667%×1.0 |
| 지시 따르기 | 42.6 | -0.49 | 실측 | [[ifbench]] 39.5918%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
