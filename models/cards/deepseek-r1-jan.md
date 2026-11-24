---
type: Model
title: DeepSeek R1 (Jan)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 2.2
output_speed_tps: 134.194455960571
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: true
radar:
  knowledge: { s: 44.7, z: -0.1, r: 48.5, estimated: false }  # 전문 지식
  reasoning: { s: 27.4, z: -0.38, r: 44.2, estimated: false }  # 추론
  coding: { s: 37.5, z: -0.12, r: 48.2, estimated: false }  # 코딩
  agentic: { s: 16.0, z: -1.1, r: 33.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 65.0, z: 0.22, r: 53.3, estimated: false }  # 긴문맥
  instruction: { s: 37.7, z: -0.53, r: 42.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 (Jan)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# DeepSeek R1 (Jan)

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $2.0 · 출력 $4.0 · 혼합 $2.2/1M · 134.194455960571 t/s · TTFT 2.64582943439162s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 48.5 | -0.1 | 실측 | [[gpqa-diamond]] 70.8081%×0.4, [[humanitys-last-exam]] 8.5%×0.3 |
| 추론 | 44.2 | -0.38 | 실측 | [[critpt]] 0.571429%×1.0, [[gpqa-diamond]] 70.8081%×1.0, [[humanitys-last-exam]] 8.5%×1.0 |
| 코딩 | 48.2 | -0.12 | 실측 | [[scicode]] 38.3102%×1.0, [[terminal-bench]] 6.06061%×0.5 |
| 에이전트 | 33.5 | -1.1 | 실측 | [[gdpval]] 302.18 Elo×1.0, [[tau2-bench]] 11.4035%×1.0, [[tau3-banking]] 6.39175%×1.0, [[terminal-bench]] 6.06061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.3 | +0.22 | 실측 | [[aa-lcr]] 57.6667%×1.0 |
| 지시 따르기 | 42.1 | -0.53 | 실측 | [[ifbench]] 38.9796%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
